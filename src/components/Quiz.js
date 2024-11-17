import React, { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Câu hỏi hiện tại
  const [selectedOption, setSelectedOption] = useState(null); // Đáp án đã chọn
  const [feedback, setFeedback] = useState(""); // Phản hồi
  const [shuffledOptions, setShuffledOptions] = useState([]); // Đáp án được xáo trộn
  const [isSubmitted, setIsSubmitted] = useState(false); // Trạng thái đã nhấn Submit
  const [results, setResults] = useState([]); // Trạng thái đúng/sai của từng câu hỏi

  // Hàm xáo trộn đáp án
  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  // Khởi tạo kết quả ban đầu (chưa trả lời tất cả các câu hỏi)
  useEffect(() => {
    setResults(new Array(questions.length).fill(null)); // Tạo mảng với giá trị ban đầu là null
  }, [questions]);

  // Xử lý khi câu hỏi thay đổi
  useEffect(() => {
    const options = questions[currentQuestion].options;
    setShuffledOptions(shuffleArray([...options]));
    setSelectedOption(null); // Reset lựa chọn
    setFeedback(""); // Xóa phản hồi
    setIsSubmitted(false); // Reset trạng thái Submit
  }, [currentQuestion, questions]);

  // Xử lý chọn đáp án
  const handleOptionChange = (option) => setSelectedOption(option);

  // Xử lý khi nhấn Submit
  const handleSubmit = () => {
    if (!selectedOption) return;

    let isCorrect = selectedOption === questions[currentQuestion].answer;
    setFeedback(
      isCorrect
        ? "Mày thông minh lắm!"
        : `Mày ngu vừa thôi, có thế cũng chọn sai. Đáp án đúng là: ${questions[currentQuestion].answer}`
    );

    // Cập nhật trạng thái đúng/sai cho câu hiện tại
    setResults((prevResults) => {
      const updatedResults = [...prevResults];
      updatedResults[currentQuestion] = isCorrect ? "correct" : "incorrect";
      return updatedResults;
    });

    setIsSubmitted(true); // Đánh dấu đã Submit
  };

  // Xử lý chuyển sang câu hỏi tiếp theo
  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <div className="quiz-container">
      <div className="sidebar">
        <h3>Câu hỏi</h3>
        <div className="question-grid">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`question-item ${
                index === currentQuestion
                  ? "active"
                  : results[index] === "correct"
                  ? "correct"
                  : results[index] === "incorrect"
                  ? "incorrect"
                  : ""
              }`}
              onClick={() => setCurrentQuestion(index)} // Cho phép nhảy sang câu hỏi khác
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div className="quiz-content">
        <h2>
          Câu {currentQuestion + 1}: {questions[currentQuestion].question}
        </h2>
        <div className="options">
          {shuffledOptions.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
                disabled={isSubmitted} // Không cho phép thay đổi sau khi Submit
              />
              {option}
            </label>
          ))}
        </div>
        {feedback && <p className="feedback">{feedback}</p>}
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            className="submit-button"
            disabled={!selectedOption} // Chỉ cho Submit nếu đã chọn đáp án
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="next-button"
            disabled={currentQuestion === questions.length - 1} // Vô hiệu hóa nếu là câu cuối
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
