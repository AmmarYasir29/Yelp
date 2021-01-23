--sudo -u postgres psql
-- string MUST single qutation 

create database yelp;

create table restaurants (
  id bigserial not null,
  name varchar (50) not null,
  location varchar(50) not null,
  price integer not null
);

insert into restaurants (name, location, price)
values('ali', 'iraq', 39);

create table reviews(
  id bigserial not null PRIMARY KEY,
  restaurant_id BIGINT NOT NULL references restaurants(id),
  email VARCHAR(50) not null,
  name varchar (50) not null,
  review TEXT not null,
  address VARCHAR(50) not null,
  rating INT not null check(
    rating >= 1
    and rating <= 5
  )
);

insert into reviews (restaurant_id, email, name, review, address, rating)
values(11, 'email@email.com', 'ali', 'areview resview revdiew', 'address', 3);