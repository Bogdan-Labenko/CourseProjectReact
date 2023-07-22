using DotNetExam.MediatR.Queries;
using DotNetExam.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography.Xml;

namespace DotNetExam.Controllers
{
	[ApiController]
	[Route("products")]
	[Produces("application/json")]
	public class ProductsController : ControllerBase
	{
		private readonly IMediator _mediator;
		public ProductsController(IMediator mediator)
		{
			_mediator = mediator;
		}
		[HttpGet]
		public async Task<ActionResult<List<Product>>> GetAllProducts()
		{
			return await _mediator.Send(new GetAllProductsQuery());
		}
	}
}
