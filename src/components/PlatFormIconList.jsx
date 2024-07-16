import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { TbDeviceNintendo } from "react-icons/tb";

function PlatFormIconList({ platforms }) {
  const iconMap = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: TbDeviceNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform, i) => (
        <Icon key={i} as={iconMap[platform.slug]} color="gray-500" />
      ))}
    </HStack>
  );
}

export default PlatFormIconList;
