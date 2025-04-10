using Api.Infrastructure.Cors;
using Api.Infrastructure.ExceptionHandlers;
using Api.Infrastructure.JsonConverters;
using Api.Infrastructure.MediatR;
using Database;
using Domain;
using Microsoft.EntityFrameworkCore;
using Shared.Database;

namespace Api;

/// <summary>
/// Startup class for the API which will include all the configurations for the API, services, swagger, mediatr, etc
/// </summary>
/// <param name="configuration"></param>
public class Startup(IConfiguration configuration)
{
  private IConfiguration Configuration { get; } = configuration;
  private Configuration? MappedConfiguration { get; set; }

  /// <summary>
  /// Configures the services for the API, such as authorization, controllers, cors, mediatr, swagger, localization, etc
  /// </summary>
  /// <param name="services"></param>
  /// <exception cref="InvalidOperationException"></exception>
  public void ConfigureServices(IServiceCollection services)
  {
    services.Configure<Configuration>(Configuration);
    MappedConfiguration = Configuration.Get<Configuration>();

    if (MappedConfiguration is null)
      throw new NullReferenceException("Configuration is null");

    if (string.IsNullOrWhiteSpace(MappedConfiguration.ConnectionStrings.DefaultConnection))
      throw new InvalidOperationException("Connection string 'DefaultConnection' not found");

    services.AddHttpContextAccessor();

    services
      .AddDomain()
      .AddApi();

    services.AddControllers()
      .AddJsonConverters();

    services.AddCustomCors(MappedConfiguration);
    services.AddCustomMediatR();

    services.AddDatabase(Configuration, true);
    services.AddEndpointsApiExplorer();

    ProblemDetailsServiceCollectionExtensions.AddProblemDetails(services);

    services.AddExceptionHandler<ProblemExceptionHandler>();
    services.AddLocalization();
    services.AddOpenApi(options =>
    {
      // options.AddSchemaTransformer<DescribeEnumMemberValues>();
      
      // options.AddSchemaTransformer((schema, context, cancellationToken) =>
      // {
      //   if (schema.Properties is not null)
      //   {
      //     foreach (var property in schema.Properties)
      //     {
      //       if (schema.Required?.Contains(property.Key) != true)
      //       {
      //         property.Value.Nullable = false;
      //       }
      //     }
      //   }
      //   return Task.CompletedTask;
      // });
    });
  }

  /// <summary>
  /// Configures the API, such as adding the swagger, exception middleware, request localization, etc
  /// </summary>
  /// <param name="app"></param>
  /// <param name="environment"></param>
  public void Configure(WebApplication app, IHostEnvironment environment)
  {
    app.UseCors("Cors");
    app.UseHttpsRedirection();
    app.UseExceptionHandler();
    app.UseStatusCodePages();

    app.UseAuthentication();
    app.UseAuthorization();

    app.MapControllers();

    app.MapOpenApi();
      // .CacheOutput();

    using (var scope = app.Services.CreateScope())
    {
      var dbContextFactory = scope.ServiceProvider.GetRequiredService<ICustomDbContextFactory<BellemansDbContext>>();
      var dbContext = dbContextFactory.CreateDbContext();
      dbContext.Database.Migrate();
    }

    app.Run();
  }
}
