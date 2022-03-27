create table if not exists advice (
  id serial not null unique,
    title varchar(64) not null,
    content varchar(255) not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp,
    primary key (id)
);


insert into advice(title, content) 
values
  ('Advice1', 'A problem shared is a problem halved.'),
  ('Advice2', 'When painting a room, preparation is key. The actual painting should account for about 40% of the work.'),
  ('Advice3', 'Try making a list.');
