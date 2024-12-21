import { Route, Routes, BrowserRouter } from "react-router-dom";

import AdminLogin from "../Screens/Auth/Login";
import ForgetPassword from "../Screens/Auth/ForgetPassword";
import ForgetPassword2 from "../Screens/Auth/ForgetPassword2";
import ForgetPassword3 from "../Screens/Auth/ForgetPassword3";
import { Dashboard } from "../Screens/Dashboard";


import { VolunteerManagement } from "../Screens/VolunteerManagement";


import { EventManagement } from "../Screens/EventManagement";
import { EditEvent } from "../Screens/EventManagement/EditEvent";
import { AddEvent } from "../Screens/EventManagement/AddEvent";
import { EventDetails } from "../Screens/EventManagement/EventDetails";

import { ProgramManagement } from "../Screens/ProgramManagement";
import { AddProgram } from '../Screens/ProgramManagement/AdProgram'
import { EditProgram } from '../Screens/ProgramManagement/EditProgram'
import { ChapterDetails } from '../Screens/ProgramManagement/ChapterDetails'

import { PodcastManagement } from "../Screens/PodcastManagement";
import { AddPodcast } from "../Screens/PodcastManagement/AddPodcast";
import { EditPodcast } from "../Screens/PodcastManagement/EditPodcast";

import { AnnouncementManagement } from "../Screens/AnnouncementManagement";
import { AddAnnouncement } from "../Screens/AnnouncementManagement/AddAnnouncement";
import { AnnouncementDetail } from "../Screens/AnnouncementManagement/AnnouncementDetail";
import { EditAnnouncement } from "../Screens/AnnouncementManagement/EditAnnouncement";
import { CustomerSupport } from "../Screens/CustomerSupport";
 
import { UserManagement } from "../Screens/UserManagement";
import { UserDetail } from "../Screens/UserManagement/UserDetail";
import { AddUser } from "../Screens/UserManagement/AddUser";
import { EditUser } from "../Screens/UserManagement/EditUser";

 
import Profile from "../Screens/Profile";
import EditProfile from "../Screens/Profile/EditProfile";
import ChangePassword from "../Screens/Profile/ChangePassword";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Error from "../Screens/Error";
import { ProjectManagement } from "../Screens/ProjectManagement";
import { AddProjectManagement } from "../Screens/ProjectManagement/AddProject";
import { ProjectManagementdetail } from "../Screens/ProjectManagement/ProjectManagementdetail";
import { EditProject } from "../Screens/ProjectManagement/EditProject";
import { ShonsorshipUserDetail } from "../Screens/sponsorshipManagement/SponsorshipDetail";
import { SponsorshipManagement } from "../Screens/sponsorshipManagement";
import { SponsorshipUserEdit } from "../Screens/sponsorshipManagement/SponsorshipEditUser";
import { MemberManagement } from "../Screens/MemberManagement";
import { AddMember } from "../Screens/MemberManagement/AddMember";
import { MemberDetail } from "../Screens/MemberManagement/MemberDetail";
import { EditMember } from "../Screens/MemberManagement/EditMember";


export default function AdminRouter() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/forget-password2" element={<ForgetPassword2 />} />
        <Route path="/forget-password3" element={<ForgetPassword3 />} />

        <Route path="/dashboard" element={<ProtectedRoutes Components={Dashboard} />} />

    
        {/* book routes  */}
        <Route path="/volunteer-management" element={<ProtectedRoutes Components={VolunteerManagement} />} />
     
        <Route path="/event-management" element={<ProtectedRoutes Components={EventManagement} />} />
        <Route path="/add-event" element={<ProtectedRoutes Components={AddEvent} />} />
        <Route path="/event-management/event-details/:id" element={<ProtectedRoutes Components={EventDetails} />} />
        <Route path="/event-management/edit-event/:id" element={<ProtectedRoutes Components={EditEvent} />} />

        <Route path="/programs-management" element={<ProtectedRoutes Components={ProgramManagement} />} />
        <Route path="/add-program" element={<ProtectedRoutes Components={AddProgram} />} />
        <Route path="/programs-management/program-details/:id" element={<ProtectedRoutes Components={ChapterDetails} />} />
        <Route path="/programs-management/edit-program/:id" element={<ProtectedRoutes Components={EditProgram} />} />

        <Route path="/podcast-management" element={<ProtectedRoutes Components={PodcastManagement} />} />
        <Route path="/add-podcast" element={<ProtectedRoutes Components={AddPodcast} />} />
        <Route path="/podcast-management/edit-podcast/:id" element={<ProtectedRoutes Components={EditPodcast} />} />

        <Route path="/announcement-management" element={<ProtectedRoutes Components={AnnouncementManagement} />} />
        <Route path="/add-announcement" element={<ProtectedRoutes Components={AddAnnouncement} />} />
        <Route path="/announcement-management/announcement-details/:id" element={<ProtectedRoutes Components={AnnouncementDetail} />} />
        <Route path="/announcement-management/edit-announcement/:id" element={<ProtectedRoutes Components={EditAnnouncement} />} />






        <Route path="/project-management" element={<ProtectedRoutes Components={ProjectManagement} />} />
        <Route path="/add-project" element={<ProtectedRoutes Components={AddProjectManagement} />} />
        <Route path="/project-management/project-details/:id" element={<ProtectedRoutes Components={ProjectManagementdetail} />} />
        <Route path="/project-management/edit-project/:id" element={<ProtectedRoutes Components={EditProject} />} />





        <Route path="/member-management" element={<ProtectedRoutes Components={MemberManagement} />} />
        <Route path="/add-member" element={<ProtectedRoutes Components={AddMember} />} />
        <Route path="/member-management/member-details/:id" element={<ProtectedRoutes Components={MemberDetail} />} />
        <Route path="/member-management/edit-member/:id" element={<ProtectedRoutes Components={EditMember} />} />



        <Route path="/sponsorship-management" element={<ProtectedRoutes Components={SponsorshipManagement} />} />
         <Route path="/sponsorship-management/sponsorship-details/:id" element={<ProtectedRoutes Components={ShonsorshipUserDetail} />} />
        <Route path="/sponsorship-management/edit-sponsorship/:id" element={<ProtectedRoutes Components={SponsorshipUserEdit} />} />




        <Route path="/customer-support" element={<ProtectedRoutes Components={CustomerSupport} />} />
  


        {/* end  */}
        <Route path="/user-management" element={<ProtectedRoutes Components={UserManagement} />} />
        <Route path="/user-detail/:id" element={<ProtectedRoutes Components={UserDetail} />} />
        <Route path="/add-user/" element={<ProtectedRoutes Components={AddUser} />} />
        <Route path="/edit-user/:id" element={<ProtectedRoutes Components={EditUser} />} />

 
        <Route path="/profile" element={<ProtectedRoutes Components={Profile} />} />
        <Route path="/profile/edit-profile" element={<ProtectedRoutes Components={EditProfile} />} />
        <Route path="/profile/change-password" element={<ChangePassword />} />

        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
