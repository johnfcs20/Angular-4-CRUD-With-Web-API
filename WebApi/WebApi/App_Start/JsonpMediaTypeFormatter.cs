using System.Net.Http.Formatting;

namespace WebApi
{
    internal class JsonpMediaTypeFormatter
    {
        private JsonMediaTypeFormatter jsonFormatter;

        public JsonpMediaTypeFormatter(JsonMediaTypeFormatter jsonFormatter)
        {
            this.jsonFormatter = jsonFormatter;
        }
    }
}