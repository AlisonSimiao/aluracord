import { Box, Text} from "@skynexui/components"
import appConfig from "../config.json"

export default function errorPage() {
    return(
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',padding: "20px",
            backgroundImage: 'url(https://pa1.narvii.com/7271/c963e93700089650e1b8fe1b4b159bf3611e0bf8r1-500-194_hq.gif)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply'
          }}
        >
            <Text styleSheet={
                {fontSize: "32px",fontWeight: 600,color: "#b8a3b6"}} >
                woops
            </Text>
            <Text styleSheet={
                {fontSize: "32px",fontWeight: 600,color: "#b8a3b6"}} >
                Thanos passou por aqui
            </Text>
        </Box>
    )
}