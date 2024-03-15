import FollowInfoModal from "@/src/components/profiles/FollowInfoModal";
import ProfileEditModal from "@/src/components/profiles/ProfileEditModal";
import { useEffect, useState } from "react";

export default function Test() {
  const [isOpen, setIsOpen] = useState(true);
  // return isOpen && <FollowInfoModal nickname="test" userId={17} dataType="follower" setIsOpen={setIsOpen} />;
  return isOpen && <ProfileEditModal setIsOpen={setIsOpen}></ProfileEditModal>;
}
