using MediatR;

namespace DotNetExam.MediatR.Commands
{
	public record RemoveRefreshTokenCommand(string refreshToken) : IRequest;
}
