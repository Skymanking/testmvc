namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Department")]
    public partial class Department
    {
        [Key]
        [StringLength(10)]
        public string ID { get; set; }

        [StringLength(500)]
        public string Name { get; set; }
    }
}
