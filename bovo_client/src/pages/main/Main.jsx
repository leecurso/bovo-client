import { Box, Typography, Container, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();

    const currentBook = {
        cover: "", 
        title: "책 제목",
        author: "저자",
        start_date: "YY.MM.DD",
        star: 3,
    };

    const bookColors = ["#D5ECF2", "#F3E38B", "#BDE5F1", "#97D9FB"];

    return (
        <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop:"5rem" }}>
            <Box
                sx={{
                    backgroundColor: "#E8F0F8",
                    borderRadius: "2rem",
                    padding: "2.5rem",
                    width: "37rem",
                    height:"45rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <Box sx={{ width: "100%", paddingTop: "3rem" }}>
                    <Typography sx={{ fontSize: "1.9rem", color: "#000000", marginLeft: "2rem" }}>Lv. 12</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.2rem", marginLeft: "2rem" }}>
                        <Typography sx={{ fontSize: "3.5rem", fontWeight: "800" }}>
                            김구름
                        </Typography>
                        <Typography sx={{ fontSize: "2.4rem", fontWeight: "500", marginTop:"0.7rem", marginLeft:"1rem"}}>님</Typography>
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", paddingTop: "1.5rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: "0.5rem", marginLeft: "2rem" }}>
                        <Typography sx={{ fontSize: "5rem", fontWeight: "800", color: "#739CD4" ,marginLeft: "1.5rem"}}>486</Typography>
                        <Typography sx={{ fontSize: "2rem", color: "#000000",marginLeft: "2.5rem",marginBottom: "-7rem"}}>권째 기록 중</Typography>
                    </Box>
                    <img
                        src="https://bovo-img-bucket.s3.ap-southeast-2.amazonaws.com/profile/profile-001.png"
                        alt="Profile"
                        style={{ width: "12rem", height: "12rem", marginBottom: "-2rem" }}
                    />
                </Box>

                <Box
                    onClick={() => navigate("/archive")}
                    sx={{
                        backgroundColor: "#ffffff",
                        padding: "2rem",
                        borderRadius: "1.5rem",
                        width: "35rem",
                        height:"20rem",
                        marginTop: "2rem",
                    }}
                >
                    <Box sx={{ display: "flex", gap: 5 }}>
                        <Box
                            sx={{
                                width: "12rem",
                                height: "16rem",
                                backgroundColor: "#D9D9D9",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "1.2rem",
                                color: "#555",
                                marginTop: "0.5rem",
                                marginLeft: "0.8rem",
                            }}
                        >
                            {currentBook.cover ? (
                                <img src={currentBook.cover} alt="책 표지" style={{ width: "100%", height: "100%" }} />
                            ) : (
                                "이미지 없음"
                            )}
                        </Box>

                        <Box>
                            <Typography sx={{ fontSize: "2.6rem", fontWeight: "700" ,marginTop: "1rem"}}>
                                {currentBook.title}
                            </Typography>
                            <Typography sx={{ fontSize: "1.6rem", color: "#6D6D6D" ,marginTop: "1rem"}}>
                                {currentBook.author}
                            </Typography>
                            <Typography sx={{ fontSize: "1.6rem", color: "#6D6D6D" ,marginTop: "0.5rem"}}>
                                읽기 시작한 날: {currentBook.start_date}
                            </Typography>
                            <Box sx={{ marginTop: "1.7rem", display: "flex", alignItems: "center" }}>
                                <Rating value={currentBook.star} readOnly />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>


        <Box sx={{ marginTop: "8rem", width: "100%" }}>
            <Box sx={{ display: "flex", gap: 2.7, justifyContent: "center", alignItems: "flex-end", height: "12rem" }}>
                {[...Array(6)].map((_, index) => {
                    const randomWidth = `${Math.floor(Math.random() * 2) + 4}rem`;  
                    const randomHeight = `${Math.floor(Math.random() * 3) + 12}rem`; 
                    const randomColor = bookColors[Math.floor(Math.random() * bookColors.length)];
                    
                    return (
                        <Box
                            key={index}
                            sx={{
                                width: randomWidth,
                                height: randomHeight,
                                backgroundColor: randomColor,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "0.4rem",
                            }}
                        >
                            <Typography variant="caption" sx={{ transform: "rotate(-270deg)", whiteSpace: "nowrap", fontSize: "1.4rem" }}>
                                책 {index + 1}
                            </Typography>
                        </Box>
                    );
                })}
            </Box>

            <Box sx={{ backgroundColor: "#739CD4", height: "1.5rem", borderRadius: "1rem", width: "100%" }}></Box>
        </Box>

        </Container>
    );
};

export default Main;
