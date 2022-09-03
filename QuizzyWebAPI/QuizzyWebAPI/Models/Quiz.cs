namespace QuizzyWebAPI.Models
{
    public class Quiz
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<int> QuestionIds { get; set; }
    }
}
