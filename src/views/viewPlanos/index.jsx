import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import { InfoPlanos } from "../../components/InfoPlanos"


export function MenuPlanos() {
    return(
        <Tabs size='md' variant='enclosed'>
            <TabList>
                <Tab>Individual</Tab>
                <Tab>Famílias</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                <InfoPlanos/>
                </TabPanel>

                <TabPanel>
                    
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}