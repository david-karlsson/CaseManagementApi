CREATE TABLE Customers
(
	[Id] INT NOT NULL PRIMARY KEY, 
    [FirstName] NVARCHAR(50) NOT NULL, 
    [LastName] NVARCHAR(50) NOT NULL, 
    [Email] NVARCHAR(50) NOT NULL, 
    [AdressLine] NVARCHAR(50) NOT NULL, 
    [PostalCode] NVARCHAR(50) NOT NULL, 
    [City] NVARCHAR(50) NOT NULL, 
    [Phone] NVARCHAR(50) NOT NULL
)
