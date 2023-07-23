using DotNetExam.Models;
using MediatR;

namespace DotNetExam.MediatR.Queries
{
	public record GetProductsByTypesQuery(string genderType, string productType) : IRequest<List<Product>>;
}
