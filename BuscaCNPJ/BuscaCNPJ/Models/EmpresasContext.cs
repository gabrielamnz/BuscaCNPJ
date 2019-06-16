using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BuscaCNPJ.Models
{
    public class EmpresasContext:DbContext
    {
        public EmpresasContext():base("DbBuscaCNPJ")
        {
            Database.Log = instrucao => System.Diagnostics.Debug.WriteLine(instrucao);
        }
        public DbSet<Empresa> Empresas { get; set; }
    }
}