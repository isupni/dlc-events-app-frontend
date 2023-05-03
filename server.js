const express = require("express")
const {createProxyMiddleware, fixRequestBody, } = require("http-proxy-middleware")

const app = express()

const api_server = process.env.API_SERVER || "http://localhost:8082"

app.set("port", process.env.PORT || 8080)
app.set("host", process.env.HOST || "0.0.0.0")

app.use(express.static("build"))

const apiProxy = createProxyMiddleware({
  target: api_server,
  changeOrigin: true,
  onProxyReq: fixRequestBody,
  logLevel: 'debug',
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api",apiProxy) 

app.listen(app.get("port"), () => {
    console.log(`[+] Server started on ${app.get("host")}:${app.get("port")}`)
})