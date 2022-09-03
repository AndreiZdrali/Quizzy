using QuizzyWebAPI.Models;

namespace QuizzyWebAPI.Services
{
    public static class QuestionService
    {
        public static List<Question> Questions;
        public static List<Quiz> Quizzes;
        static QuestionService()
        {
            Questions = new List<Question>
            {
                new Question
                {
                    Id = 1, Category = "math", Title = "2+3?", IncorrectAnswers = new List<string>
                    {
                        "3", "2", "7"
                    }, CorrectAnswer = "5"
                },
                new Question
                {
                    Id = 2, Category = "history", Title = "Who?", IncorrectAnswers = new List<string>
                    {
                        "Hitler", "Iohannis", "Stefan"
                    }, CorrectAnswer = "Cezar"
                }
            };

            Quizzes = new List<Quiz>
            {
                new Quiz
                {
                    Id = 1, Category = "mixed", Description = "Questions from a variety of categories",
                    Title = "Mixed", QuestionIds = new List<int> { 1, 2 }
                },
                new Quiz
                {
                    Id = 2, Category = "history", Description = "How well do you know your kings?",
                    Title = "History", QuestionIds = new List<int> { 1, 2 }
                },
                new Quiz
                {
                    Id = 3, Category = "math", Description = "I hope you paid attention in school",
                    Title = "Math", QuestionIds = new List<int> { 1, 2 }
                }
            };
        }

        public static List<Question> GetAll() => Questions;

        public static List<Quiz> GetAllQuizzes() => Quizzes;

        public static Question? Get(int id) => Questions.FirstOrDefault(q => q.Id == id);

        public static List<Question> GetRandomQuiz(string category)
        {
            if (category.ToLower() == "mixed")
                return Questions.OrderBy(x => Random.Shared.Next()).Take(5).ToList();

            return Questions.Where(q => q.Category.ToLower() == category.ToLower())
                .OrderBy(x => Random.Shared.Next()).Take(5).ToList();
        }

    }
}
