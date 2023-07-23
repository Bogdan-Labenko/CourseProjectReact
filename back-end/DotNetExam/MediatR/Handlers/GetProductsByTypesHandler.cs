using DotNetExam.MediatR.Queries;
using DotNetExam.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace DotNetExam.MediatR.Handlers
{
	public class GetProductsByTypesHandler : IRequestHandler<GetProductsByTypesQuery, List<Product>>
	{
		private readonly AppDbContext _context;
		public GetProductsByTypesHandler(AppDbContext context)
		{
			_context = context;
		}
		public async Task<List<Product>> Handle(GetProductsByTypesQuery request, CancellationToken cancellationToken)
		{
			return await _context.Products.Include(p => p.ProductType).Include(p => p.GenderType).Where(p => p.ProductType.Name == request.productType && p.GenderType.Name == request.genderType).ToListAsync(cancellationToken);
		}
	}
}
