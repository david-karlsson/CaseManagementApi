﻿using System;
using System.Collections.Generic;

namespace CaseManagementApi.Models
{
    public partial class CaseWorkers
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
    }
}
