DROP DATABASE IF EXISTS video_games WITH (FORCE);

CREATE DATABASE video_games;

\c video_games;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    rated TEXT,
    title VARCHAR,
    genre TEXT,
    platform VARCHAR,
    release_date INTEGER,
    game_content VARCHAR,
    score INTEGER
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    content TEXT,
    title VARCHAR(255),
    user_score INTEGER CHECK (user_score BETWEEN 0 AND 100),
    reviewer VARCHAR(255),
    game_id INTEGER REFERENCES games (id)
    ON DELETE CASCADE
);

