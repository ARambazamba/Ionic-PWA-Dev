namespace smartSammlerAPI
{
    public class ApiResponse
    {
        public bool Status { get; set; }
        public Marker Marker { get; set; }
        public object Data {get;set;}
    }

}
