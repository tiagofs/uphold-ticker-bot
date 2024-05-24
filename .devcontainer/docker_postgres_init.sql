\connect uphold_bot

CREATE TABLE IF NOT EXISTS oscilation_alerts (
	id SERIAL PRIMARY KEY,
	ask DECIMAL NOT NULL,
	bid DECIMAL NOT NULL,
	rate DECIMAL NOT NULL,
	oscilation DECIMAL NOT NULL,
	oscilation_tresshold DECIMAL NOT NULL,
    created_at TIMESTAMP NOT NULL
);