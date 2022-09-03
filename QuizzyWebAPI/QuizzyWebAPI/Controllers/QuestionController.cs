using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuizzyWebAPI.Services;
using QuizzyWebAPI.Models;

namespace QuizzyWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        public QuestionController()
        {
            
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(QuestionService.GetAll());
        }

        [HttpGet("quiz")]
        public IActionResult GetAllQuizzes()
        {
            return Ok(QuestionService.GetAllQuizzes());
        }

        [HttpGet("quiz/{category}")]
        public IActionResult GetRandomQuiz(string category)
        {
            List<Question> questions = QuestionService.GetRandomQuiz(category);

            if (questions is null || questions.Count <= 0)
                return NotFound();

            return Ok(questions);
        }
    }
}
