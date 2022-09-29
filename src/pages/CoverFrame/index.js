import React from "react";

import { Stack, Img, Column, Text, Row, Button, Line, List } from "components";

const CoverFramePage = () => {
  return (
    <>
      <Stack className="bg-gray_201 font-roboto 3xl:h-[1038px] lg:h-[672px] xl:h-[769px] 2xl:h-[865px] mx-[auto] lg:pl-[39px] xl:pl-[44px] 2xl:pl-[50px] 3xl:pl-[60px] w-[100%]">
        <Stack
          className="absolute bg-cover bg-repeat 3xl:h-[1038px] lg:h-[672px] xl:h-[769px] 2xl:h-[865px] right-[0] w-[81%]"
          style={{ backgroundImage: "url('images/img_group16.png')" }}
        >
          <Img
            src="images/img_group16.png"
            className="absolute 3xl:h-[1038px] lg:h-[672px] xl:h-[769px] 2xl:h-[865px] w-[100%]"
            alt="RectangleSix"
          />
          <Img
            src="images/img_image1.png"
            className="absolute lg:h-[374px] xl:h-[427px] 2xl:h-[481px] 3xl:h-[576px] right-[0] top-[0] w-[65%]"
            alt="imageOne"
          />
        </Stack>
        <Column className="absolute bottom-[6%] right-[3%] w-[23%]">
          <Img
            src="images/img_combinedshape_white_A700.svg"
            className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[98%]"
            alt="CombinedShape"
          />
          <Column className="lg:mt-[234px] xl:mt-[268px] 2xl:mt-[301px] 3xl:mt-[362px] w-[60%]">
            <Text className="font-medium lg:text-[23px] xl:text-[27px] 2xl:text-[30px] 3xl:text-[36px] text-white_A700 w-[auto]">
              Travel Website
            </Text>
            <Text className="font-normal 3xl:mt-[11px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-blue_200 w-[auto]">
              Made by Team Locofy
            </Text>
          </Column>
        </Column>
        <Column className="absolute bg-white_A700 h-[max-content] inset-y-[0] items-center left-[0] my-[auto] rounded-radius16 w-[67%]">
          <Row className="bg-white_A700 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[13px] 3xl:p-[16px] w-[100%]">
            <Img
              src="images/img_combinedshape.png"
              className="lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[30px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] w-[12%]"
              alt="CombinedShape One"
            />
            <Text className="font-normal lg:ml-[385px] xl:ml-[441px] 2xl:ml-[496px] 3xl:ml-[595px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-blue_800 w-[auto]">
              Explore
            </Text>
            <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_800 w-[auto]">
              Search
            </Text>
            <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_800 w-[auto]">
              Hotels
            </Text>
            <Text className="font-normal lg:ml-[15px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-gray_800 w-[auto]">
              Offers
            </Text>
            <Img
              src="images/img_notification.svg"
              className="lg:h-[12px] xl:h-[13px] 2xl:h-[15px] 3xl:h-[18px] lg:ml-[19px] xl:ml-[22px] 2xl:ml-[25px] 3xl:ml-[30px] w-[1%]"
              alt="notification"
            />
            <Img
              src="images/img_unsplashd1upki.png"
              className="lg:h-[19px] xl:h-[21px] 2xl:h-[24px] 3xl:h-[29px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[1px] rounded-radius50 lg:w-[18px] xl:w-[20px] 2xl:w-[23px] 3xl:w-[28px]"
              alt="unsplashd1UPki"
            />
          </Row>
          <Stack className="lg:h-[335px] xl:h-[383px] 2xl:h-[431px] 3xl:h-[517px] w-[100%]">
            <div className="absolute bg-gradient2  bottom-[0] lg:h-[335px] xl:h-[383px] 2xl:h-[431px] 3xl:h-[517px] w-[100%]"></div>
            <Stack className="absolute lg:h-[335px] xl:h-[383px] 2xl:h-[431px] 3xl:h-[517px] top-[0] w-[100%]">
              <Img
                src="images/img_bannerbackgro.png"
                className="absolute lg:h-[335px] xl:h-[383px] 2xl:h-[431px] 3xl:h-[517px] w-[100%]"
                alt="BannerBackgro"
              />
              <Column className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] pt-[3px] w-[81%]">
                <Text className="font-baloobhai font-normal not-italic lg:text-[31px] xl:text-[36px] 2xl:text-[41px] 3xl:text-[49px] text-white_A700 w-[auto]">
                  Let’s explore & travel the world
                </Text>
                <Text className="font-normal font-roboto 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Find the best destinations and the most popular stays!
                </Text>
                <Row className="bg-white_A700 font-roboto items-center lg:mt-[22px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] lg:p-[12px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] rounded-radius748 w-[100%]">
                  <Column className="border-black_900_3a border-bw075 border-solid mb-[1px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius299 w-[27%]">
                    <Column className="bg-white_A700 items-center ml-[2px] w-[19%]">
                      <div className="bg-white_A700 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] w-[100%]"></div>
                      <Text className="font-normal not-italic lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-black_900_99 tracking-ls1 w-[auto]">
                        Departure
                      </Text>
                    </Column>
                    <Text className="font-normal mb-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900_dd tracking-ls1 w-[auto]">
                      Singapore (SIN)
                    </Text>
                  </Column>
                  <Column className="border-black_900_3a border-bw075 border-solid mb-[1px] lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:pb-[5px] xl:pb-[6px] 2xl:pb-[7px] 3xl:pb-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[8px] rounded-radius299 w-[27%]">
                    <Column className="bg-white_A700 items-center ml-[2px] w-[12%]">
                      <div className="bg-white_A700 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] w-[100%]"></div>
                      <Text className="font-normal not-italic lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-black_900_99 tracking-ls1 w-[auto]">
                        Arrival
                      </Text>
                    </Column>
                    <Text className="font-normal mb-[2px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900_dd tracking-ls1 w-[auto]">
                      Los Angeles (LA)
                    </Text>
                  </Column>
                  <Column className="border-black_900_3a border-bw075 border-solid items-center mb-[1px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] rounded-radius299 w-[25%]">
                    <Stack className="lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] rounded-radius299 w-[100%]">
                      <div className="absolute border-black_900_3a border-bw075 border-solid lg:h-[29px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[45px] rounded-radius299 w-[100%]"></div>
                      <Row className="absolute h-[max-content] inset-[0] items-center justify-center m-[auto] w-[99%]">
                        <Text className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-black_900_dd tracking-ls1 w-[auto]">
                          01/05/2022
                        </Text>
                        <Img
                          src="images/img_trash.svg"
                          className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] w-[6%]"
                          alt="trash"
                        />
                      </Row>
                      <Column className="absolute bg-white_A700 items-center left-[1%] top-[0] w-[9%]">
                        <div className="bg-white_A700 2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] w-[100%]"></div>
                        <Text className="font-normal not-italic lg:text-[6px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px] text-black_900_99 tracking-ls1 w-[auto]">
                          Date
                        </Text>
                      </Column>
                    </Stack>
                  </Column>
                  <Button className="font-medium mb-[1px] lg:ml-[11px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-center tracking-ls1 uppercase w-[15%]">
                    Search flights
                  </Button>
                </Row>
              </Column>
            </Stack>
          </Stack>
          <Text className="font-bold lg:mt-[37px] xl:mt-[43px] 2xl:mt-[48px] 3xl:mt-[58px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 tracking-ls1 uppercase w-[auto]">
            Upcoming Flight
          </Text>
          <Row className="xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:pr-[14px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[22px] w-[91%]">
            <Column className="border-bw075 border-gray_201 border-solid items-center justify-end xl:p-[11px] 2xl:p-[12px] 3xl:p-[15px] lg:p-[9px] rounded-radius598 w-[40%]">
              <Row className="mt-[1px] pt-[1px] w-[99%]">
                <Column className="mt-[1px] w-[36%]">
                  <Text className="capitalize font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_801 tracking-ls1 w-[auto]">
                    SIN
                  </Text>
                  <Text className="capitalize font-normal mt-[2px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Singapore
                  </Text>
                </Column>
                <Column className="items-center mb-[1px] pr-[1px] pt-[1px] w-[47%]">
                  <Img
                    src="images/img_airplane.svg"
                    className="lg:h-[10px] xl:h-[12px] 2xl:h-[13px] 3xl:h-[16px] w-[51%]"
                    alt="airplane"
                  />
                  <Text className="capitalize font-bold mt-[4px] 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                    15H 55M
                  </Text>
                </Column>
                <Column className="items-end mt-[1px] w-[16%]">
                  <Text className="capitalize font-bold lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-blue_801 tracking-ls1 w-[auto]">
                    LAX
                  </Text>
                  <Text className="capitalize font-normal mt-[2px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Los Angeles
                  </Text>
                </Column>
              </Row>
              <Line className="bg-gray_201 h-[0.75px] lg:mt-[10px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] w-[99%]" />
              <Row className="items-center justify-between xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[99%]">
                <Text className="capitalize font-normal not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                  Departs on: 1 May, 08:00 AM
                </Text>
                <Text className="font-normal mb-[1px] not-italic 3xl:text-[11px] lg:text-[7px] xl:text-[8px] 2xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                  4 days to go
                </Text>
              </Row>
            </Column>
            <Line className="bg-gray_201 3xl:h-[117px] lg:h-[76px] xl:h-[87px] 2xl:h-[98px] lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] w-[1px]" />
            <Column className="lg:ml-[18px] xl:ml-[20px] 2xl:ml-[23px] 3xl:ml-[28px] mt-[2px] w-[54%]">
              <Text className="font-normal not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_101 tracking-ls1 uppercase w-[auto]">
                Prepare for your trip
              </Text>
              <Row className="justify-evenly xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] pb-[1px] w-[100%]">
                <Column className="items-center w-[17%]">
                  <Button
                    className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                    shape="icbRoundedBorder12"
                    size="smIcn"
                    variant="icbFillPink300"
                  >
                    <Img
                      src="images/img_car.svg"
                      className="flex items-center justify-center"
                      alt="car"
                    />
                  </Button>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Hotel
                  </Text>
                </Column>
                <Column className="items-center w-[19%]">
                  <Button
                    className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                    shape="icbRoundedBorder12"
                    size="smIcn"
                    variant="icbFillDeeporange300"
                  >
                    <Img
                      src="images/img_ticket.svg"
                      className="flex items-center justify-center lg:h-[17px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px]"
                      alt="ticket"
                    />
                  </Button>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Attractions
                  </Text>
                </Column>
                <Column className="items-center w-[17%]">
                  <Button
                    className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                    shape="icbRoundedBorder12"
                    size="smIcn"
                    variant="icbFillGreenA400"
                  >
                    <Img
                      src="images/img_map.svg"
                      className="flex items-center justify-center"
                      alt="map"
                    />
                  </Button>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Eats
                  </Text>
                </Column>
                <Column className="w-[18%]">
                  <Button
                    className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center ml-[1px] lg:w-[33px] xl:w-[38px] 2xl:w-[43px] 3xl:w-[51px]"
                    shape="icbRoundedBorder12"
                    size="smIcn"
                    variant="icbFillAmberA400"
                  >
                    <Img
                      src="images/img_car_48X48.svg"
                      className="flex items-center justify-center"
                      alt="car One"
                    />
                  </Button>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Commute
                  </Text>
                </Column>
                <Column className="items-center w-[18%]">
                  <Stack className="bg-blue_401 lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] xl:px-[11px] 2xl:px-[12px] 3xl:px-[15px] lg:px-[9px] rounded-radius12 w-[55%]">
                    <Img
                      src="images/img_car_19X21.svg"
                      className="absolute lg:h-[14px] xl:h-[16px] 2xl:h-[18px] 3xl:h-[21px] inset-[0] justify-center m-[auto] w-[40%]"
                      alt="car Two"
                    />
                  </Stack>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Taxi
                  </Text>
                </Column>
                <Column className="items-center w-[9%]">
                  <Button
                    className="flex lg:h-[34px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[52px] items-center justify-center w-[100%]"
                    shape="icbRoundedBorder12"
                    size="smIcn"
                    variant="icbFillLightgreenA700"
                  >
                    <Img
                      src="images/img_vector.svg"
                      className="flex items-center justify-center"
                      alt="Vector"
                    />
                  </Button>
                  <Text className="font-normal lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-bluegray_400 tracking-ls1 w-[auto]">
                    Movies
                  </Text>
                </Column>
              </Row>
            </Column>
          </Row>
          <Row className="items-center lg:mt-[41px] xl:mt-[47px] 2xl:mt-[53px] 3xl:mt-[63px] pt-[2px] w-[89%]">
            <Column className="w-[82%]">
              <Text className="font-bold xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_801 tracking-ls1 uppercase w-[auto]">
                Plan your next trip
              </Text>
              <Text className="capitalize font-bold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 tracking-ls1 w-[auto]">
                Most Popular Destinations
              </Text>
            </Column>
            <Row className="bg-white_A700 items-center justify-end pb-[1px] px-[1px] rounded-radius897 w-[18%]">
              <Text className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_801 tracking-ls1 w-[auto]">
                View all destinations
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mr-[1px] w-[6%]"
                alt="arrowright"
              />
            </Row>
          </Row>
          <Row className="items-center lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[87%]">
            <Img
              src="images/img_unsplashnnzkzn.png"
              className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] w-[23%]"
              alt="unsplashnnzkZN"
            />
            <Img
              src="images/img_unsplashyc8qqp.png"
              className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] w-[23%]"
              alt="unsplashYC8qqp"
            />
            <Img
              src="images/img_unsplashltnpej.png"
              className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] w-[23%]"
              alt="unsplashLtnPej"
            />
            <Img
              src="images/img_unsplashm0oiyn.png"
              className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:ml-[16px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] w-[23%]"
              alt="unsplashM0OIyN"
            />
          </Row>
          <Text className="capitalize font-bold lg:mt-[136px] xl:mt-[156px] 2xl:mt-[175px] 3xl:mt-[210px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 tracking-ls1 w-[auto]">
            Recommended Holidays
          </Text>
          <Row className="bg-white_A700 items-center justify-end ml-[auto] lg:mt-[139px] xl:mt-[159px] 2xl:mt-[179px] 3xl:mt-[215px] pr-[2px] w-[14%]">
            <Text className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_801 tracking-ls1 w-[auto]">
              View all holidays
            </Text>
            <Img
              src="images/img_group.svg"
              className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[7%]"
              alt="Group"
            />
          </Row>
          <List
            className="lg:gap-[16px] xl:gap-[19px] 2xl:gap-[21px] 3xl:gap-[25px] grid grid-cols-4 min-h-[auto] lg:mt-[167px] xl:mt-[191px] 2xl:mt-[215px] 3xl:mt-[258px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] w-[89%]"
            orientation="horizontal"
          >
            <Column
              className="bg-cover bg-repeat items-center justify-end lg:pt-[126px] xl:pt-[144px] 2xl:pt-[162px] 3xl:pt-[194px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7.48px] rounded-tr-[7.48px] w-[100%]"
              style={{ backgroundImage: "url('images/img_reccard1.png')" }}
            >
              <Row className="bg-white_A700 border-bw075 border-gray_201 border-solid items-center 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-bl-[7.48px] rounded-br-[7.48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Column className="font-roboto items-center mt-[2px] w-[71%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 tracking-ls1 w-[auto]">
                    Bali
                  </Text>
                  <Text className="font-normal lg:mt-[318px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                    4D3N
                  </Text>
                </Column>
                <Text className="font-baloobhai font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 w-[auto]">
                  $899
                </Text>
              </Row>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center justify-end lg:pt-[126px] xl:pt-[144px] 2xl:pt-[162px] 3xl:pt-[194px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7.48px] rounded-tr-[7.48px] w-[100%]"
              style={{ backgroundImage: "url('images/img_reccard2.png')" }}
            >
              <Row className="bg-white_A700 border-bw075 border-gray_201 border-solid items-center justify-end 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-bl-[7.48px] rounded-br-[7.48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Column className="font-roboto items-center mt-[3px] w-[70%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 tracking-ls1 w-[auto]">
                    Switzerland
                  </Text>
                  <Text className="font-normal lg:mt-[318px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                    6D5N
                  </Text>
                </Column>
                <Text className="font-baloobhai font-normal ml-[1px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 w-[auto]">
                  $900
                </Text>
              </Row>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center justify-end lg:pt-[126px] xl:pt-[144px] 2xl:pt-[162px] 3xl:pt-[194px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7.48px] rounded-tr-[7.48px] w-[100%]"
              style={{ backgroundImage: "url('images/img_reccard3.png')" }}
            >
              <Row className="bg-white_A700 border-bw075 border-gray_201 border-solid items-center 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-bl-[7.48px] rounded-br-[7.48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Column className="font-roboto items-center mt-[2px] w-[71%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 tracking-ls1 w-[auto]">
                    Boracay
                  </Text>
                  <Text className="font-normal lg:mt-[318px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                    5D4N
                  </Text>
                </Column>
                <Text className="font-baloobhai font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 w-[auto]">
                  $699
                </Text>
              </Row>
            </Column>
            <Column
              className="bg-cover bg-repeat items-center justify-end lg:pt-[126px] xl:pt-[144px] 2xl:pt-[162px] 3xl:pt-[194px] rounded-bl-[0] rounded-br-[0] rounded-tl-[7.48px] rounded-tr-[7.48px] w-[100%]"
              style={{ backgroundImage: "url('images/img_reccard4.png')" }}
            >
              <Row className="bg-white_A700 border-bw075 border-gray_201 border-solid items-center 3xl:pt-[11px] lg:pt-[7px] xl:pt-[8px] 2xl:pt-[9px] 3xl:px-[11px] lg:px-[7px] xl:px-[8px] 2xl:px-[9px] rounded-bl-[7.48px] rounded-br-[7.48px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                <Column className="font-roboto items-center mt-[2px] w-[72%]">
                  <Text className="font-medium lg:text-[10px] xl:text-[11px] 2xl:text-[13px] 3xl:text-[16px] text-gray_800 tracking-ls1 w-[auto]">
                    Palawan
                  </Text>
                  <Text className="font-normal lg:mt-[318px] xl:mt-[364px] 2xl:mt-[409px] 3xl:mt-[491px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-gray_500 tracking-ls1 w-[auto]">
                    4D3N
                  </Text>
                </Column>
                <Text className="font-baloobhai font-normal lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] not-italic lg:text-[16px] xl:text-[19px] 2xl:text-[21px] 3xl:text-[25px] text-blue_800 w-[auto]">
                  $789
                </Text>
              </Row>
            </Column>
          </List>
          <Text className="capitalize font-bold lg:mt-[380px] xl:mt-[435px] 2xl:mt-[489px] 3xl:mt-[587px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_900 tracking-ls1 w-[auto]">
            Popular Stays
          </Text>
          <Row className="bg-white_A700 items-center justify-end ml-[auto] lg:mt-[383px] xl:mt-[438px] 2xl:mt-[493px] 3xl:mt-[592px] pr-[2px] w-[12%]">
            <Text className="font-medium xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-blue_801 tracking-ls1 w-[auto]">
              View all stays
            </Text>
            <Img
              src="images/img_group.svg"
              className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] w-[9%]"
              alt="Group One"
            />
          </Row>
          <List
            className="lg:gap-[12px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px] grid grid-cols-4 min-h-[auto] lg:mt-[409px] xl:mt-[468px] 2xl:mt-[526px] 3xl:mt-[632px] w-[87%]"
            orientation="horizontal"
          >
            <Column className="bg-white_A700 border-bw075 border-gray_201 border-solid justify-end lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] w-[100%]">
              <Img
                src="images/img_unsplashhhrfsd.png"
                className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] ml-[1px] mt-[1px] w-[99%]"
                alt="unsplashHhRfsd"
              />
              <Text className="font-normal ml-[1px] lg:mt-[534px] xl:mt-[610px] 2xl:mt-[687px] 3xl:mt-[824px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                Entire bungalow
              </Text>
              <Img
                src="images/img_group_blue_800.svg"
                className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:ml-[128px] xl:ml-[146px] 2xl:ml-[164px] 3xl:ml-[197px] lg:mt-[534px] xl:mt-[611px] 2xl:mt-[688px] 3xl:mt-[825px] w-[8%]"
                alt="Group Two"
              />
              <Text className="capitalize font-bold ml-[1px] lg:mt-[547px] xl:mt-[626px] 2xl:mt-[704px] 3xl:mt-[845px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_900 tracking-ls1 w-[auto]">
                Matterhorn Suites
              </Text>
              <Text className="font-normal ml-[1px] lg:mt-[563px] xl:mt-[644px] 2xl:mt-[725px] 3xl:mt-[869px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                $575/night
              </Text>
              <Row className="ml-[1px] lg:mt-[586px] xl:mt-[670px] 2xl:mt-[754px] 3xl:mt-[905px] w-[99%]">
                <Img
                  src="images/img_star.svg"
                  className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                  alt="star"
                />
                <Text className="font-medium ml-[2px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                  4.9
                </Text>
                <Text className="font-normal xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-blue_800 tracking-ls1 w-[auto]">
                  (60 reviews)
                </Text>
              </Row>
              <Text className="border-bluegray_102 border-bw075 border-solid font-medium ml-[1px] lg:mt-[609px] xl:mt-[696px] 2xl:mt-[783px] 3xl:mt-[940px] lg:pl-[24px] xl:pl-[28px] 2xl:pl-[31px] 3xl:pl-[37px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-blue_800 tracking-ls1 uppercase w-[auto]">
                More details
              </Text>
            </Column>
            <Column className="bg-white_A700 border-bw075 border-gray_201 border-solid items-center justify-end lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] w-[100%]">
              <Img
                src="images/img_unsplashtsn8bp.png"
                className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] mt-[1px] w-[99%]"
                alt="unsplashtSn8bP"
              />
              <Text className="font-normal lg:mt-[534px] xl:mt-[610px] 2xl:mt-[687px] 3xl:mt-[824px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                2-Story beachfront suite
              </Text>
              <Text className="capitalize font-bold lg:mt-[547px] xl:mt-[626px] 2xl:mt-[704px] 3xl:mt-[845px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_900 tracking-ls1 w-[auto]">
                Discovery Shores
              </Text>
              <Text className="font-normal lg:mt-[563px] xl:mt-[644px] 2xl:mt-[725px] 3xl:mt-[869px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                $360/night
              </Text>
              <Row className="lg:mt-[586px] xl:mt-[670px] 2xl:mt-[754px] 3xl:mt-[905px] w-[99%]">
                <Img
                  src="images/img_star.svg"
                  className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                  alt="star One"
                />
                <Text className="font-medium ml-[2px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                  4.8
                </Text>
                <Text className="font-normal xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-blue_800 tracking-ls1 w-[auto]">
                  (116 reviews)
                </Text>
              </Row>
              <Text className="border-bluegray_102 border-bw075 border-solid font-medium lg:mt-[609px] xl:mt-[696px] 2xl:mt-[783px] 3xl:mt-[940px] lg:pl-[24px] xl:pl-[28px] 2xl:pl-[31px] 3xl:pl-[37px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-blue_800 tracking-ls1 uppercase w-[auto]">
                More details
              </Text>
            </Column>
            <Column className="bg-white_A700 border-bw075 border-gray_201 border-solid items-center justify-end lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] w-[100%]">
              <Img
                src="images/img_unsplashrlwe8f.png"
                className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] mt-[1px] w-[99%]"
                alt="unsplashrlwE8f"
              />
              <Text className="font-normal lg:mt-[534px] xl:mt-[610px] 2xl:mt-[687px] 3xl:mt-[824px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                Single deluxe hut
              </Text>
              <Text className="capitalize font-bold lg:mt-[547px] xl:mt-[626px] 2xl:mt-[704px] 3xl:mt-[845px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_900 tracking-ls1 w-[auto]">
                Arctic Hut{" "}
              </Text>
              <Text className="font-normal lg:mt-[563px] xl:mt-[644px] 2xl:mt-[725px] 3xl:mt-[869px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                $420/night
              </Text>
              <Row className="lg:mt-[586px] xl:mt-[670px] 2xl:mt-[754px] 3xl:mt-[905px] w-[99%]">
                <Img
                  src="images/img_star.svg"
                  className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                  alt="star Two"
                />
                <Text className="font-medium ml-[2px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                  4.7
                </Text>
                <Text className="font-normal xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-blue_800 tracking-ls1 w-[auto]">
                  (78 reviews)
                </Text>
              </Row>
              <Text className="border-bluegray_102 border-bw075 border-solid font-medium lg:mt-[609px] xl:mt-[696px] 2xl:mt-[783px] 3xl:mt-[940px] lg:pl-[24px] xl:pl-[28px] 2xl:pl-[31px] 3xl:pl-[37px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-blue_800 tracking-ls1 uppercase w-[auto]">
                More details
              </Text>
            </Column>
            <Column className="bg-white_A700 border-bw075 border-gray_201 border-solid justify-end lg:pt-[6px] xl:pt-[7px] 2xl:pt-[8px] 3xl:pt-[9px] lg:px-[6px] xl:px-[7px] 2xl:px-[8px] 3xl:px-[9px] w-[100%]">
              <Img
                src="images/img_unsplashyqrybv.png"
                className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] ml-[1px] mt-[1px] w-[99%]"
                alt="unsplashyqRybv"
              />
              <Text className="font-normal ml-[1px] lg:mt-[534px] xl:mt-[610px] 2xl:mt-[687px] 3xl:mt-[824px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_400 tracking-ls1 w-[auto]">
                Deluxe King Room
              </Text>
              <Img
                src="images/img_group_blue_800.svg"
                className="2xl:h-[1px] xl:h-[1px] lg:h-[1px] 3xl:h-[2px] lg:ml-[128px] xl:ml-[146px] 2xl:ml-[164px] 3xl:ml-[197px] lg:mt-[534px] xl:mt-[611px] 2xl:mt-[688px] 3xl:mt-[825px] w-[8%]"
                alt="Group Three"
              />
              <Text className="capitalize font-bold ml-[1px] lg:mt-[547px] xl:mt-[626px] 2xl:mt-[704px] 3xl:mt-[845px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[17px] text-bluegray_900 tracking-ls1 w-[auto]">
                Lake Louise Inn
              </Text>
              <Text className="font-normal ml-[1px] lg:mt-[563px] xl:mt-[644px] 2xl:mt-[725px] 3xl:mt-[869px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                $244/night
              </Text>
              <Row className="ml-[1px] lg:mt-[586px] xl:mt-[670px] 2xl:mt-[754px] 3xl:mt-[905px] w-[99%]">
                <Img
                  src="images/img_star.svg"
                  className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[9px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[8px] xl:w-[9px]"
                  alt="star Three"
                />
                <Text className="font-medium ml-[2px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-bluegray_900 tracking-ls1 w-[auto]">
                  4.6
                </Text>
                <Text className="font-normal xl:ml-[4px] lg:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[8px] xl:text-[9px] text-blue_800 tracking-ls1 w-[auto]">
                  (63 reviews)
                </Text>
              </Row>
              <Text className="border-bluegray_103 border-bw075 border-solid font-medium ml-[1px] lg:mt-[609px] xl:mt-[696px] 2xl:mt-[783px] 3xl:mt-[940px] lg:pl-[24px] xl:pl-[28px] 2xl:pl-[31px] 3xl:pl-[37px] lg:pt-[4px] xl:pt-[5px] 2xl:pt-[6px] 3xl:pt-[7px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px] text-blue_800 tracking-ls1 uppercase w-[auto]">
                More details
              </Text>
            </Column>
          </List>
        </Column>
      </Stack>
    </>
  );
};

export default CoverFramePage;
