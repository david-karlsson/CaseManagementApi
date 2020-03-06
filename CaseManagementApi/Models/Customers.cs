using System;
using System.Collections.Generic;

namespace CaseManagementApi.Models
{
    public partial class Customers
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string AdressLine { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public int Id { get; set; }
    }
}
