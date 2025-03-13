import { Container } from "@mui/material";
import styles from "./Layout.module.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogoutModal } from "../../store/logout/LogeoutSlice";
import LogoutModal from "../../components/logoutModal/LogoutModal";

const Layout = () => {
    const location = useLocation();  // 현재 경로 가져오기
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogout = useSelector((state) => state.logout.isLogout); //logout 모달 상태

    const onLogout = (state) => {
        dispatch(toggleLogoutModal(state));
    } 

    // ✅ 로그아웃 핸들러 함수
    const handleLogout = async () => {
        // await logout(); // 로그아웃 실행
        dispatch(toggleLogoutModal(false)); // 모달 닫기
        navigate("/login"); // ✅ 로그인 페이지로 이동
    };

    return (
        <Container className={styles.layout} disableGutters>
            {location.pathname !== "/404" && <Header onLogout={onLogout} />}
            <Outlet />
            {isLogout && <LogoutModal handleLogout={handleLogout}/>}
        </Container>
    );
};

export default Layout;