create table if not exists advice (
    id serial primary key not null unique AUTO_INCREMENT,
    title varchar(64) not null,
    content varchar(255) text not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp default current_timestamp
);


insert into advice(title, content) 
values
  ('Advice1', 'A problem shared is a problem halved.'),
  ('Advice2', 'When painting a room, preparation is key. The actual painting should account for about 40% of the work.'),
  ('Advice3', "Don't try and bump start a motorcycle on an icy road."),
  ('Advice4', 'Try making a list.');
