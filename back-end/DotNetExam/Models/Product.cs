namespace DotNetExam.Models
{
	public class Product
	{
		public int Id { get; set; }
		public string? Name { get; set; }
		public string? Rating { get; set; }
		public float Price { get; set; }
		public string? Image { get; set; }
		public ProductType? ProductType { get; set; }
		public GenderType? GenderType { get; set; }
	}
}
