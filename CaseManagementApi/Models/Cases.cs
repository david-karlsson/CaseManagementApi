using System;
using System.Collections.Generic;

namespace CaseManagementApi.Models
{
    public partial class Cases
    {
        public int Id { get; set; }
        public int? CaseWorkerId { get; set; }
        public int? CustomerId { get; set; }
        public int? CaseStatusId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? Created { get; set; }
        public DateTime? Modified { get; set; }
    }
}
