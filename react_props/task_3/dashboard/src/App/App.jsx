import React from "react";
import "./App.css";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "./CourseList";

function App() {
  const notificationsList = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    {
      id: 3,
      type: "urgent",
      html: { __html: "<strong>Urgent requirement</strong> - complete by EOD" },
    },
  ];

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const coursesList = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  return (
    <>
      <div className="root-notifications">
        <Notifications notifications={notificationsList} />
      </div>
      <div>{isLoggedIn ? <CourseList courses={coursesList} /> : <Login />}</div>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
