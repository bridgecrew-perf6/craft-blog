extern crate dataprocess;

use dataprocess::config::Config;
use std::env;
use std::process;

fn main() {
    let args: Vec<String> = env::args().collect();

    let config = Config::new(&args).unwrap_or_else(|err| {
        eprintln!("Problem possing arguments: {err}");
        process::exit(1);
    });

    if let Err(err) = dataprocess::run(config) {
        eprintln!("Application error: {err}");
        process::exit(1);
    }
}
