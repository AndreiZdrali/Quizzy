﻿namespace QuizzyWebAPI.Models
{
    public class Question
    {
        public int Id { get; set; }
        public string Category { get; set; }
        public string Title { get; set; }
        public List<string> IncorrectAnswers { get; set; }
        public string CorrectAnswer { get; set; }
    }
}
