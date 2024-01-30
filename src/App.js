import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./Pages/SignIn";
import SignUpStepOne from "./Pages/SignUpStepOne";
import SignUpStepTwo from "./Pages/SignUpStepTwo";
import SignUpStepThree from "./Pages/SignUpStepThree";
import SignUpStepFour from "./Pages/SignUpStepFour";
import ForgotPassword from "./Pages/ForgotPassword";
import Dashboard from "./Pages/Dashboard";
import PlansContent from "./Components/Dashboard/ServicesPage/PlansContent";
import CouponsContent from "./Components/Dashboard/ServicesPage/CouponsContent";
import AddressContent from "./Components/Dashboard/SettingsPage/AddressContent";
import CenterInfoContent from "./Components/Dashboard/SettingsPage/CenterInfoContent";
import TimingContent from "./Components/Dashboard/SettingsPage/TimingContent";
import FacilitiesContent from "./Components/Dashboard/SettingsPage/FacilitiesContent";
import FinancialsContent from "./Components/Dashboard/SettingsPage/FinancialsContent";
import PhotosContent from "./Components/Dashboard/SettingsPage/PhotosContent";
import DocumentsContent from "./Components/Dashboard/SettingsPage/DocumentsContent";
import PaymentsContent from "./Components/Dashboard/SettingsPage/PaymentsContent";
import Profile from "./Components/Dashboard/SettingsPage/Profile";
import EditProfile from "./Components/Dashboard/SettingsPage/EditProfile";
import StudentsListContent from "./Components/Dashboard/StudentsPage/StudentsListContent";
import AttendanceContent from "./Components/Dashboard/StudentsPage/AttendanceContent";
import AddStudentContent from "./Components/Dashboard/StudentsPage/AddStudentContent";
import AdmissionContent from "./Components/Dashboard/StudentsPage/AdmissionContent";
import TotalStudentsContent from "./Components/Dashboard/StudentsPage/TotalStudentsContent";
import AppliedContent from "./Components/Dashboard/StudentsPage/AppliedChildrenContent";
import RoomContent from "./Components/Dashboard/MyCenterPage/RoomContent";
import RoomDetails from "./Components/Dashboard/MyCenterPage/RoomDetails";
import ChildrenTab from "./Components/Dashboard/MyCenterPage/ChildrenTab";
import FamilyTab from "./Components/Dashboard/MyCenterPage/FamilyTab";
import ActivitesTab from "./Components/Dashboard/MyCenterPage/ActivitesTab";
import ManagingTab from "./Components/Dashboard/MyCenterPage/ManagingTab";
import CalendarContent from "./Components/Dashboard/MyCenterPage/CalendarContent";
import MessagesContent from "./Components/Dashboard/MessagingPage/MessagesContent";
import AnnouncementContent from "./Components/Dashboard/MessagingPage/AnnouncementContent";
import ManagementContent from "./Components/Dashboard/MessagingPage/ManagementContent";
import BlogContent from "./Components/Dashboard/ArticlesPage/BlogContent";
import CreateNewArticle from "./Components/Dashboard/ArticlesPage/CreateNewArticle";
import StaffListContent from "./Components/Dashboard/StaffPage/StaffListContent";
import StaffDetails from "./Components/Dashboard/StaffPage/StaffDetails";
import StaffAttendanceContent from "./Components/Dashboard/StaffPage/StaffAttendanceContent";
import ShiftContent from "./Components/Dashboard/StaffPage/ShiftContent";
import LeavesContent from "./Components/Dashboard/StaffPage/LeavesContent";
import SalariesContent from "./Components/Dashboard/StaffPage/SalariesContent";
import SalariesHistoryContent from "./Components/Dashboard/StaffPage/SalariesHistoryContent";
import StaffProfile from "./Components/Dashboard/StaffPage/StaffProfile/StaffProfile";
import StaffProfileContent from "./Components/Dashboard/StaffPage/StaffProfile/StaffProfileContent";
import StaffAttachmentsContent from "./Components/Dashboard/StaffPage/StaffProfile/StaffAttachmentsContent";
import StaffPermissionsContent from "./Components/Dashboard/StaffPage/StaffProfile/StaffPermissionsContent";
import StaffActivityLogContent from "./Components/Dashboard/StaffPage/StaffProfile/StaffActivityLogContent";
import StaffRequestsLogContent from "./Components/Dashboard/StaffPage/StaffProfile/StaffRequestsLogContent";
import StaffSalaryLogContent from "./Components/Dashboard/StaffPage/StaffProfile/StaffSalaryLogContent";
import StaffAttendanceLogContent from "./Components/Dashboard/StaffPage/StaffProfile/StaffAttendanceLogContent";
import Reporting from "./Pages/Reporting";
import ReportingAttendanceContent from "./Components/ReportingAttendanceContent";
import ReportingDailyContent from "./Components/ReportingDailyContent";
import Billing from "./Pages/Billing";
import BillingContent from "./Components/BillingContent";
import BillingRequestContent from "./Components/BillingRequestContent";
import BillingRefundContent from "./Components/BillingRefundContent";
import StudentsProfileContent from "./Components/Dashboard/StudentsPage/StudentsProfile/StudentsProfileContent";
import StudentsProfileTab from "./Components/Dashboard/StudentsPage/StudentsProfile/StudentsProfileTab";
import StudentsProfileActivitiesTab from "./Components/Dashboard/StudentsPage/StudentsProfile/StudentsProfileActivitiesTab";
import StudentsProfileAttachmentsTab from "./Components/Dashboard/StudentsPage/StudentsProfile/StudentsProfileAttachmentsTab";
import StudentsProfileDailyReportTab from "./Components/Dashboard/StudentsPage/StudentsProfile/StudentsProfileDailyReportTab";
import StudentsProfileInvoicesTab from "./Components/Dashboard/StudentsPage/StudentsProfile/StudentsProfileInvoicesTab";
import SupportNoTicketContent from "./Components/Dashboard/SupportPage/SupportNoTicketContent";
import SupportTicketContent from "./Components/Dashboard/SupportPage/SupportTicketContent";
import SupportCreateNewTicket from "./Components/Dashboard/SupportPage/SupportCreateNewTicket";
import SupportViewTicket from "./Components/Dashboard/SupportPage/SupportViewTicket";
import FormWizard from "./Pages/FormWizard";
import FormWizardOne from "./Components/FormWizard/FormWizardOne";
import FormWizardTwo from "./Components/FormWizard/FormWizardTwo";
import FormWizardThree from "./Components/FormWizard/FormWizardThree";
import FormWizardFour from "./Components/FormWizard/FormWizardFour";
import FormWizardFive from "./Components/FormWizard/FormWizardFive";
import FormWizardSix from "./Components/FormWizard/FormWizardSix";
import FormWizardSeven from "./Components/FormWizard/FormWizardSeven";
import DashboardContent from "./Components/Dashboard/DashboardPage/DashboardContent";
import FinancialTab from "./Components/Dashboard/DashboardPage/FinancialTab";
import OverviewTab from "./Components/Dashboard/DashboardPage/OverviewTab";
import UnderReviewPage from "./Components/Dashboard/DashboardPage/UnderReviewPage";
import ResubmitPage from "./Components/Dashboard/DashboardPage/ResubmitPage";
import SettingsContent from "./Components/Dashboard/SettingsPage/SettingsContent";
import ServicesContent from "./Components/Dashboard/ServicesPage/ServicesContent";
import StudentsContent from "./Components/Dashboard/StudentsPage/StudentsContent";
import SupportContent from "./Components/Dashboard/SupportPage/SupportContent";
import MyCenterContent from "./Components/Dashboard/MyCenterPage/MyCenterContent";
import MessagingContent from "./Components/Dashboard/MessagingPage/MessagingContent";
import ArticlesContent from "./Components/Dashboard/ArticlesPage/ArticlesContent";
import ReviewContent from "./Components/Dashboard/ReviewsPage/ReviewContent";
import StaffContent from "./Components/Dashboard/StaffPage/StaffContent";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup/step-one" element={<SignUpStepOne />} />
        <Route path="/signup/step-two" element={<SignUpStepTwo />} />
        <Route path="/signup/step-three" element={<SignUpStepThree />} />
        <Route path="/signup/step-four" element={<SignUpStepFour />} />
        <Route path="/signup/forgot-password" element={<ForgotPassword />} />

        {/* Form Wizard */}
        <Route path="/form-wizard" element={<FormWizard />}>
          {/* Make 'step-one' the default child route */}
          <Route index element={<FormWizardOne />} />
          <Route path={"step-one"} element={<FormWizardOne />} />
          <Route path={"step-two"} element={<FormWizardTwo />} />
          <Route path={"step-three"} element={<FormWizardThree />} />
          <Route path={"step-four"} element={<FormWizardFour />} />
          <Route path={"step-five"} element={<FormWizardFive />} />
          <Route path={"step-six"} element={<FormWizardSix />} />
          <Route path={"step-seven"} element={<FormWizardSeven />} />
        </Route>

        {/* Dashboard */}
        <Route path="/" element={<Dashboard />}>
          {/* Make 'dashboard' the default child route */}
          <Route index element={<DashboardContent />} />

          {/* Dashboard Page */}
          <Route path={"dashboard"} element={<DashboardContent />}>
            {/* Make 'overview' the default child route */}
            <Route index element={<OverviewTab />} />
            <Route path={"overview"} element={<OverviewTab />} />
            <Route path={"center"} element={<OverviewTab />} />
            <Route path={"financial"} element={<FinancialTab />} />
          </Route>
          <Route path={"under-review"} element={<UnderReviewPage />} />
          <Route path={"resubmit"} element={<ResubmitPage />} />

          {/* Settings Page */}
          <Route path={"settings"} element={<SettingsContent />}>
            {/* Make 'center info' the default child route */}
            <Route index element={<CenterInfoContent />} />
            <Route path={"center"} element={<CenterInfoContent />} />
            <Route path={"timing"} element={<TimingContent />} />
            <Route path={"address"} element={<AddressContent />} />
            <Route path={"facilities"} element={<FacilitiesContent />} />
            <Route path={"financials"} element={<FinancialsContent />} />
            <Route path={"photos"} element={<PhotosContent />} />
            <Route path={"documents"} element={<DocumentsContent />} />
            <Route path={"payments"} element={<PaymentsContent />} />
            <Route path={"profile"} element={<Profile />} />
            <Route path={"edit-profile"} element={<EditProfile />} />
          </Route>

          {/* Services Page */}
          <Route path={"services"} element={<ServicesContent />}>
            {/* Make 'plans' the default child route */}
            <Route index element={<PlansContent />} />
            <Route path="plans" element={<PlansContent />} />
            <Route path="coupons" element={<CouponsContent />} />
          </Route>

          {/* Students Page*/}
          <Route path={"students"} element={<StudentsContent />}>
            {/* Make 'attendance' the default child route */}
            <Route index element={<AttendanceContent />} />
            <Route path="attendance" element={<AttendanceContent />} />
            <Route path="profile" element={<StudentsProfileContent />}>
              <Route index element={<StudentsProfileTab />} />
              <Route
                path="activities"
                element={<StudentsProfileActivitiesTab />}
              />
              <Route
                path="attachments"
                element={<StudentsProfileAttachmentsTab />}
              />
              <Route
                path="daily-report"
                element={<StudentsProfileDailyReportTab />}
              />
              <Route path="invoices" element={<StudentsProfileInvoicesTab />} />
            </Route>
            <Route path="list" element={<StudentsListContent />} />
            <Route path="add" element={<AddStudentContent />} />
            <Route path="admission" element={<AdmissionContent />}>
              <Route index element={<TotalStudentsContent />} />
              <Route path="applied" element={<AppliedContent />} />
            </Route>
          </Route>

          {/* Support Page */}
          <Route path={"support"} element={<SupportContent />}>
            {/* Make 'Support' the default child route */}
            <Route index element={<SupportNoTicketContent />} />
            <Route path="no-ticket" element={<SupportNoTicketContent />} />
            <Route path="ticket" element={<SupportTicketContent />} />
            <Route path="ticket/create" element={<SupportCreateNewTicket />} />
            <Route path="ticket/view" element={<SupportViewTicket />} />
          </Route>

          {/* My Center Page */}
          <Route path={"my-center"} element={<MyCenterContent />}>
            {/* Make 'room' the default child route */}
            <Route index element={<RoomContent />} />
            <Route path="room" element={<RoomContent />} />
            <Route path="room/details" element={<RoomDetails />}>
              <Route index element={<ChildrenTab />} />
              <Route path="children" element={<ChildrenTab />} />
              <Route path="family" element={<FamilyTab />} />
              <Route path="activities" element={<ActivitesTab />} />
              <Route path="manage" element={<ManagingTab />} />
            </Route>
            <Route path="calendar" element={<CalendarContent />} />
          </Route>

          {/* Messaging Page */}
          <Route path={"chat"} element={<MessagingContent />}>
            {/* Make 'messsages' the default child route */}
            <Route index element={<MessagesContent />} />
            <Route path="messages" element={<MessagesContent />} />
            <Route path="announcements" element={<AnnouncementContent />} />
            <Route path="management" element={<ManagementContent />} />
          </Route>

          {/* Staff Page */}
          <Route path={"staff"} element={<StaffContent />}>
            {/* Make 'list' the default child route */}
            <Route index element={<StaffListContent />} />
            <Route path="list" element={<StaffListContent />} />
            <Route path="attendance" element={<StaffAttendanceContent />} />
            <Route path="shifts" element={<ShiftContent />} />
            <Route path="leave" element={<LeavesContent />} />
            <Route path="salaries" element={<SalariesContent />} />
            <Route
              path="salaries-history"
              element={<SalariesHistoryContent />}
            />
            <Route path="details" element={<StaffDetails />} />
            <Route path="profile" element={<StaffProfile />}>
              <Route index element={<StaffProfileContent />} />
              <Route path="attachments" element={<StaffAttachmentsContent />} />
              <Route path="permissions" element={<StaffPermissionsContent />} />
              <Route
                path="activity-log"
                element={<StaffActivityLogContent />}
              />
              <Route
                path="requests-log"
                element={<StaffRequestsLogContent />}
              />
              <Route path="salary-log" element={<StaffSalaryLogContent />} />
              <Route
                path="attendance-log"
                element={<StaffAttendanceLogContent />}
              />
            </Route>
          </Route>

          {/* Articles */}
          <Route path={"articles"} element={<ArticlesContent />}>
            {/* Make 'blog' the default child route */}
            <Route index element={<BlogContent />} />
            <Route path="blog" element={<BlogContent />} />
            <Route path="new" element={<CreateNewArticle />} />
          </Route>

          {/* Reviews */}
          <Route path={"review"} element={<ReviewContent />} />

          {/*  */}
        </Route>

        {/* Billing */}
        <Route path={"/billing"} element={<Billing />}>
          {/* Make 'billing' the default child route */}
          <Route index element={<BillingContent />} />
          <Route path="request" element={<BillingRequestContent />} />
          <Route path="refund" element={<BillingRefundContent />} />
        </Route>

        {/* Reporting */}
        <Route path={"/report"} element={<Reporting />}>
          {/* Make 'reporting' the default child route */}
          <Route index element={<ReportingAttendanceContent />} />
          <Route path="attendance" element={<ReportingAttendanceContent />} />
          <Route path="daily" element={<ReportingDailyContent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
