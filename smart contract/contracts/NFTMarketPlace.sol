// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.12;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "hardhat/console.sol"; 

contract NFTMarket is ERC721URIStorage {
    using Counters for Counters.Counter;

    Counters.Counter private _itemsSold;
    Counters.Counter private _tokenIds;

    uint listingPrice = .0010 ether; // default pricing

    address payable owner;
    mapping(uint => MarketItem) private idMarketItem;
    struct MarketItem {
        uint tokenId;
        address payable seller;
        address payable owner;
        uint price;
        bool sold;
    }

    event idMarketItemCreated(
        uint indexed tokenId,
        address seller,
        address owner,
        uint price,
        bool sold
    );

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the Marketplace owner is allowed to modify the price listings.");
        _;
    }

    constructor() ERC721("PROWESS", "PRWS") {
        owner == payable(msg.sender);
    }

    function updateListingPrice(uint _listingPrice) public payable onlyOwner {
        listingPrice = _listingPrice;
    }

    function getListingPrice() public view returns (uint) {
    return listingPrice;
    }

    // NFT TOKEN CREATION.
    function createToken(string memory tokenURI, uint price) public payable returns(uint) {
        _tokenIds.increment();

        uint newTokenId = _tokenIds.current();
        _mint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);

        createMarketItem(newTokenId, price);

        return newTokenId;
    }

    // MARKET ITEM CREATION.
    function createMarketItem(uint tokenId, uint price) private {
        require(price > 0, "The price must be atleast 1.");
        require(msg.value == listingPrice, "Price should be equal to listing price.");

        idMarketItem[tokenId] = MarketItem(
            tokenId,
            payable(msg.sender),
            payable(address(this)),
            price,
            false
        );

        _transfer(msg.sender, address(this), tokenId);

        emit idMarketItemCreated(tokenId, msg.sender, address(this), price, false);
    }

    // RESALE TOKEN
    function reSellToken(uint tokenId, uint price) public payable {
        require(idMarketItem[tokenId].owner == msg.sender, "This operation can only be performed by the item owner.");

        require(msg.value == listingPrice, "Price must be equal to listing price.");

        idMarketItem[tokenId].sold = false;
        idMarketItem[tokenId].price = price;
        idMarketItem[tokenId].seller = payable(msg.sender);
        idMarketItem[tokenId].owner = payable(address(this));

        _itemsSold.decrement();
        _transfer(msg.sender, address(this), tokenId);
    }

    // CREATE MARKET SALE
    function createMarketSale(uint tokenId) public payable {
        uint price = idMarketItem[tokenId].price;

        require(msg.value == price, "Please submit the asking price in order to complete the.");

        idMarketItem[tokenId].owner = payable(msg.sender);
        idMarketItem[tokenId].sold = true;
        idMarketItem[tokenId].seller = payable(address(0)); // if any problem arises, change to .owner

        _itemsSold.increment();
        _transfer(address(this), msg.sender, tokenId);

        payable(owner).transfer(listingPrice);
        payable(idMarketItem[tokenId].seller).transfer(msg.value);
    } 

    // GET UNSOLD NFT DATA
    function fetchMarketItem() public view returns(MarketItem[] memory) {
        uint itemCount = _tokenIds.current();
        uint unSoldItemCount = _tokenIds.current() - _itemsSold.current();
        uint currentIndex = 0;

        MarketItem[] memory items = new MarketItem[](unSoldItemCount);
        for (uint i = 0; i < itemCount; i++) {
            if(idMarketItem[i + 1].owner == address(this)) {
                uint currentId = i + 1;
                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }
        }
        return items;  
    }

    // PURCHASE ITEM
    function fetchNFT() public view returns(MarketItem[] memory) {
        uint totalCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for(uint i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].owner == msg.sender) {
                itemCount += 1;
            }
        }
        MarketItem[] memory items = new MarketItem[](itemCount);
        for(uint i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].owner == msg.sender) {
                uint currntId = i + 1;
                MarketItem storage currentItem = idMarketItem[currntId];
                items[currentIndex] = currentItem;
                currentIndex +=1;
            }   
        }
        return items;
    }

    // SINGLE USER ITEMS.
    function fetchItemsListed() public view returns (MarketItem[] memory) {
        uint totalCount = _tokenIds.current();
        uint itemCount = 0;
        uint currentIndex = 0;

        for(uint i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].seller == msg.sender) {
                itemCount += 1;
            }
        }

        MarketItem[] memory items = new MarketItem[](itemCount);
        for (uint i = 0; i < totalCount; i++) {
            if(idMarketItem[i + 1].seller == msg.sender) {
                uint currentId = i + 1;

                MarketItem storage currentItem = idMarketItem[currentId];
                items[currentIndex] = currentItem;
                currentIndex += 1;
            }
        }

        return items;
    }
}
