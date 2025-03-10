import { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import DeleteModal from "../../components/deleteModal/DeleteModal";
import useDelete from "../../hooks/useDelete";
import useBooks from "../../hooks/useBooks";

const NoteDetail = () => {
  const { memo_id } = useParams();
  const navigate = useNavigate();
  const { deleteItem } = useDelete();
  const { getMemoById, loading } = useBooks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const memo = getMemoById(memo_id);

  const handleDeleteConfirm = () => {
    if (!memo?.book_id) {
      console.error("book_id를 찾을 수 없음");
      return;
    }

    deleteItem(memo_id, "memo", memo.book_id, () => navigate(`/note/${memo.book_id}`));
  };

  const handleEditMemo = () => {
    navigate(`/note/note-edit/${memo_id}`);
  };

  if (loading) return <Typography>메모를 불러오는 중입니다.</Typography>;
  if (!memo) return <Typography>해당 메모를 찾을 수 없습니다.</Typography>;

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={4}>
      {/* 날짜 및 가로줄 */}
      <Box display="flex" alignItems="center" width="100%" maxWidth="41rem">
        <Typography sx={{ fontSize: "2rem", fontWeight: "bold" }}>{memo.memo_date}</Typography>
        <Box flexGrow={1} mx={2} height={2} bgcolor="#739CD4"></Box>
      </Box>

      {/* 질문 박스 */}
      <Paper
        elevation={0}
        sx={{
          width: "41rem",
          height: "68.5rem",
          backgroundColor: "#E8F1F6",
          borderRadius: "20px",
          mt: 4,
          position: "relative",
        }}
      >
        {/* 세로줄 + 질문 */}
        <Box display="flex" alignItems="center">
          <Box sx={{ width: "0.5rem", height: "8rem", backgroundColor: "#739CD4", marginLeft: "2rem" }} />
          <Typography
            color="black"
            sx={{
              display: "flex",
              alignItems: "center",
              height: "8rem",
              fontSize: "2rem",
              fontWeight: "bold",
              margin: "2rem",
            }}
          >
            {memo.memo_Q}
          </Typography>
        </Box>

        {/* 내용 */}
        <Paper
          elevation={0}
          sx={{
            width: "38rem",
            height: "55rem",
            backgroundColor: "white",
            borderBottomLeftRadius: "1.25rem",
            borderBottomRightRadius: "1.25rem",
            overflowY: "auto",
            position: "absolute",
            bottom: "1.5rem",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography sx={{ fontSize: "1.5rem", margin: "1.5rem" }}>{memo.memo_A}</Typography>
        </Paper>
      </Paper>

      {/* 버튼 */}
      <Box display="flex" gap={2} mt={3} width="41rem" justifyContent="flex-end">
        <Button
          variant="contained"
          disableElevation
          onClick={() => setIsModalOpen(true)}
          sx={{
            width: "15rem",
            height: "5rem",
            borderRadius: "1.25rem",
            backgroundColor: "#E8F1F6",
            color: "red",
            fontSize: "1.5rem",
          }}
        >
          삭제하기
        </Button>
        <Button
          variant="contained"
          disableElevation
          onClick={handleEditMemo}
          sx={{
            width: "15rem",
            height: "5rem",
            borderRadius: "1.25rem",
            backgroundColor: "#E8F1F6",
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          수정하기
        </Button>
      </Box>

      {/* 삭제 모달 */}
      <DeleteModal open={isModalOpen} 
      onClose={() => setIsModalOpen(false)} 
      onConfirm={handleDeleteConfirm} 
      />
    </Box>
  );
};

export default NoteDetail;