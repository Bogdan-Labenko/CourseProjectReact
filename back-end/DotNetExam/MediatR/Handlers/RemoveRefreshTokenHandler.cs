using DotNetExam.MediatR.Commands;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace DotNetExam.MediatR.Handlers
{
	public class RemoveRefreshTokenHandler : IRequestHandler<RemoveRefreshTokenCommand>
	{
		private readonly AppDbContext _context;
		public RemoveRefreshTokenHandler(AppDbContext context)
		{
			_context = context;
		}
		public async Task Handle(RemoveRefreshTokenCommand request, CancellationToken cancellationToken)
		{
			_context.Users.FirstOrDefaultAsync(u => u.RefreshToken == request.refreshToken, cancellationToken).Result.RefreshToken = "";
			await _context.SaveChangesAsync(cancellationToken);
		}
	}
}
