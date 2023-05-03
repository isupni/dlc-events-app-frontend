import InfoIcon from '@mui/icons-material/Info';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { ALARM, INFO, SUCCESS, WARNING } from './severityTypes';

export const severityMapping = (severity) => {
    switch(severity){
        case INFO:
            return {color: "#d2e7f7", iconjsx : <InfoIcon fontSize='large' color='info'sx={{alignSelf:"center"}}/> }
        case WARNING:
            return {color: "#faf2ca", iconjsx : <ReportProblemIcon fontSize='large' color='warning'sx={{alignSelf:"center"}}/> }
        case ALARM:
            return {color: "#ff8b87", iconjsx : <WhatshotIcon fontSize='large' color='error'sx={{alignSelf:"center"}}/> }
        case SUCCESS:
            return {color: "#d2f7d9", iconjsx : <CheckCircleOutlineIcon fontSize='large' color='success'sx={{alignSelf:"center"}}/> }
        default: 
            return {color: "lightgrey", iconjsx: null}
    }
}