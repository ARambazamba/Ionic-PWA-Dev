# smartSammler REST Api

Requires .NET Core SDK v2.1.4 and SQL Standard or Enterprise to be installed locally. If you want to use another version change connection string in appsettings.json.

Don't forget to create SQL Login "angular" with pwd "angular" as Sysadmin.

Start smartSammler REST Api

Go to folder where \*.csproj is located, open console and run:

```
dotnet restore and then
dotnet run
```

For device testing it might be helpful to enable remote access - by default the .Net Core API is only available using :

```
http://localhost:PORT/

dotnet run --urls http://0.0.0.0:5000
```

# Entity Framework

Migrations are Changes in the DB Schema when using Code-First

## To manage Migrations & create the DB go to console:

Restore Assemblies

```
dotnet restore
```

Add Migration

```
dotnet ef migrations add MIGRATION-NAME
```

Apply Migration to Database

```
dotnet ef database update
```
