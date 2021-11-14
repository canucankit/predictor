export interface NationalityPredictor {
  name: String;
  country: Country[];
}

export interface Country {
  country_id: String;
  probability: Number;
}
