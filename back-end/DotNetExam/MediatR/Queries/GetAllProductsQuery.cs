using DotNetExam.Models;
using MediatR;

namespace DotNetExam.MediatR.Queries
{
	public record GetAllProductsQuery : IRequest<List<Product>>;
}
