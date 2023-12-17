docker build --no-cache -f SQL\Dockerfile.PostgreSql -t proekt/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t proekt/app ../..
