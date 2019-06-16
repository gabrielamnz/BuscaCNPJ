using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BuscaCNPJ.Models
{
    public class Empresa
    {
        [Key]
        [Required]
        [StringLength(18, ErrorMessage = "O CNPJ deve ter 18 caracteres.")]
        public string CNPJ { get; set; }
        [Required]
        [MaxLength(200,ErrorMessage ="A Razão Social deve ter até 200 caracteres. ")]
        [Display(Name ="Razão Social:")]
        public string RazaoSocial { get; set; }
        [Required]
        [MaxLength(200,ErrorMessage ="O Nome Fantasia deve ter até 200 caracteres.")]
        [Display(Name ="Nome Fantasia")]
        public string NomeFantasia { get; set; }
        
        [Required]
        [MaxLength(100,ErrorMessage ="O Endereço deve ter até 100 caracteres.")]
        [Display(Name ="Endereço")]
        public string Endereco { get; set; }
        [Required]
        [MaxLength(50,ErrorMessage ="O Bairro deve ter até 50 caracteres.")]
        public string Bairro { get; set; }
        [Required]
        [RegularExpression("(AC|AL|AP|AM|BA|CE|DF|ES|GO|MA|MT|MS|MG|PA|PB|PR|PE|PI|RJ|RN|RS|RO|RR|SC|SP|SE|TO)", ErrorMessage = "Informe um estado válido.")]
        public string UF { get; set; }
        public string Complemento { get; set; }
        [Required]
        [StringLength(9, ErrorMessage ="O CEP deve ter 9 caracteres, contando com o traço")]
        public string CEP { get; set; }
        [Required]
        public bool Situacao { get; set; }
    }
}