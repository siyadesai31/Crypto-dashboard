import { Flex, Icon, Stack } from "@chakra-ui/react"
import DashboardLayout from "../../components/DashboardLayout"
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import InfoCard from "../Dashboard/components/InfoCard";
import { AiTwotoneMessage } from "react-icons/ai";
const Support = () => {
  return (
      <DashboardLayout title="Support">
        <Stack gap={5}>
          <SupportCard  title="Contact Us" 
                        message="Have a question or just want to know more? Feel free to reach out to us." 
                        icon={IoMdMail} 
                        leftComponent={<ContactCard/>}
                      />
          <SupportCard  title="Live Chat" 
                        message="Don’t have time to wait for the answer? Chat with us now." 
                        icon={AiTwotoneMessage} 
                        leftComponent={<InfoCard  inverted={true}
                                                  tagText="Chat Bot"
                                                  imgUrl="/grid_bg.svg"
                                                  text="Learn more about our real estate, mortgage, and  corporate account services"
                      />}
                      />
        </Stack>
      </DashboardLayout>
  )
}

export default Support
