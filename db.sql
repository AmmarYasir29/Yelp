--sudo -u postgres psql
create database yelp;
create table restaurants (
  id bigserial not null,
  name varchar (50) not null,
  location varchar(50) not null,
  price integer not null
);
insert into restaurants (name, location, price)
values('ali', 'iraq', 39);