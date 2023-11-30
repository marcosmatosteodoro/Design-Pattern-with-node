## Padrões Criacionais:
- ### Singleton (Singleton Pattern):

- Propósito: Garante que uma classe tenha apenas uma instância e fornece um ponto global para essa instância.
- Uso Típico: Quando exatamente uma instância de uma classe é necessária para coordenar ações em todo o sistema.
- ### Factory Method (Padrão Método de Fábrica):

- Propósito: Define uma interface para criar um objeto, mas deixa as subclasses alterarem o tipo de objetos que serão criados.
- Uso Típico: Quando uma classe não pode antecipar a classe de objetos que precisa criar.
- ### Abstract Factory (Padrão Fábrica Abstrata):

- Propósito: Fornece uma interface para criar famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
- Uso Típico: Quando um sistema precisa ser independente de como seus objetos são criados, compostos e representados.
- ### Builder (Padrão Builder):

- Propósito: Separa a construção de um objeto complexo da sua representação, de modo que o mesmo processo de construção possa criar diferentes representações.
- Uso Típico: Quando um objeto pode existir em diferentes formas ou configurações.
- ### Prototype (Padrão Protótipo):

- Propósito: Especifica os tipos de objetos a serem criados usando uma instância prototípica e cria novos objetos copiando este protótipo.
- Uso Típico: Quando a criação de uma instância de uma classe é mais cara ou complexa do que a cópia de um objeto existente.