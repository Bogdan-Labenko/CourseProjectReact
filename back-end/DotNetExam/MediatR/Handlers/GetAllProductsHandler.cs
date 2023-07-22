using DotNetExam.MediatR.Queries;
using DotNetExam.Models;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace DotNetExam.MediatR.Handlers
{
	public class GetAllProductsHandler : IRequestHandler<GetAllProductsQuery, List<Product>>
	{
		private readonly AppDbContext _context;
		public GetAllProductsHandler(AppDbContext context)
		{
			_context = context;
		}

		public Task<List<Product>> Handle(GetAllProductsQuery request, CancellationToken cancellationToken)
		{
			return _context.Products.Include(p => p.ProductType).Include(p => p.GenderType).ToListAsync(cancellationToken);
		}
	}
}
