using System;
using System.Collections.Generic;

namespace CaseManagementApi.Models
{
    public partial class Comments
    {
        public int Id { get; set; }
        public int? Caseid { get; set; }
        public int? CustomerId { get; set; }
        public int? CaseworkerId { get; set; }
        public string Description { get; set; }
        public DateTime? Created { get; set; }
    }
}
