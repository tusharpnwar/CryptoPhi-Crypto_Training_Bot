# Crypto Prediction and Analysis App

This Streamlit app provides users with tools for predicting and analyzing stock prices using various techniques, including ARIMA (AutoRegressive Integrated Moving Average) modeling and Simple Moving Average (SMA) analysis.[DEPLOYED WEBSITE LINK](https://cryptotradingbot11.streamlit.app/)

## Features

- **Data Fetching**: Fetch historical stock price data from Yahoo Finance.
- **Prediction**: Utilize an ARIMA model to predict future stock prices based on historical data.
- **SMA Analysis**: Perform Simple Moving Average analysis to identify potential buy/sell signals.
- **Interactive UI**: User-friendly interface built with Streamlit, allowing users to input ticker symbols, select date ranges, and customize analysis parameters.

## Getting Started

To run this application locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://https://github.com/tusharpnwar/CryptoPhi-Crypto_Training_Bot/
   ```

2. Install the required Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the Streamlit app:

   ```bash
   streamlit run app.py
   ```

4. Access the app in your web browser at `http://localhost:8501`.

## Usage

1. **Input Ticker Symbol**: Enter the ticker symbol of the cypto you want to analyze (e.g., `ETH`, `BTC`, `MSFT`).

2. **Select Date Range**: Choose the start and end dates for the historical data and prediction.

3. **Customize Parameters**: Adjust parameters such as the short and long SMA windows, as well as the number of prediction steps.

4. **Visualization**: View historical and predicted stock prices on interactive charts.

5. **Analysis Results**: Check the current price, predicted closing price, and trading decision (Buy/Sell/Hold) based on SMA analysis.

## Background Images

The app features background images to enhance the visual appeal. The main container background is set to an image from [Unsplash](https://unsplash.com/), while the sidebar background can be customized by replacing `IMAGES.jpg` with your preferred image.

## Credits

- [Streamlit](https://streamlit.io/) - For creating the user-friendly app framework.
- [Yahoo Finance](https://finance.yahoo.com/) - For providing historical stock price data.
- [Plotly](https://plotly.com/) - For interactive data visualization.

