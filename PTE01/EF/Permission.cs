namespace Model.EF
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;
    [Table("Permission")]
    public partial class Permission
    {
        [Key]
        public string ID { get; set; }
        [StringLength(500)]
        public string Name { get; set; }

        [StringLength(50)]
        public string Level { get; set; }
        public bool Status { get; set; }
    }
}
