<template>
    <div>
      <!-- Price Range Filter -->
      <div class="filter">Preço
        <q-input
          v-model="minPrice"
          type="number"
          label="Preço mínimo"
          outlined
          dense
          @input="applyPriceFilter"
        />
        <q-input
          v-model="maxPrice"
          type="number"
          label="Preço máximo"
          outlined
          dense
          @input="applyPriceFilter"
        />
      </div>
  
      <!-- Brand Filter -->
      <div class="filter">Marca
        <q-select
          v-model="selectedBrand"
          :options="brandOptions"
          emit-value
          map-options
          use-input
          @input="applyBrandFilter"
        />
      </div>
      <!-- Category Filter -->
      <div class="filter">Categoria
        <q-select
          v-model="selectedCategory"
          :options="categoryOptions"
          emit-value
          map-options
          use-input
          @input="applyCategoryFilter"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        minPrice: null, // Holds the minimum price
        maxPrice: null, // Holds the maximum price
        selectedBrand: '', // Holds the selected brand
        selectedCategory: '', // Holds the selected category
        brandOptions: [
          { label: 'Todas', value: '' }, // Default option
          { label: 'Apple', value: 'brand1' },
          { label: 'Asus', value: 'brand2' },
          { label: 'Crucial', value: 'brand3' },
          { label: 'Corsair', value: 'brand4' },
          { label: 'Dell', value: 'brand5' },
          { label: 'Logitech', value: 'brand6' },
          { label: 'LG', value: 'brand7' },
          { label: 'HyperX', value: 'brand8' },
          { label: 'Nvidia', value: 'brand9' },
          { label: 'Sony', value: 'brand10' },
          { label: 'Samsung', value: 'brand11' }
          // Add more brands as needed
        ],
        categoryOptions: [
          { label: 'Todas', value: '' }, // Default option
          { label: 'Mouses', value: 'category1' },
          { label: 'Teclados', value: 'category2' },
          { label: 'Headset', value: 'category3' },
          { label: 'Placas de vídeo', value: 'category4' },
          { label: 'Ram', value: 'category5' },
          { label: 'Armazenamento', value: 'category6' },
          { label: 'Celulares', value: 'category7' },
          { label: 'Monitores', value: 'category8' },
          // Add more categories as needed
        ]
      };
    },
    methods: {
      applyPriceFilter() {
        // Emit event to parent component with minPrice and maxPrice
        this.$emit('priceRangeSelected', {
          minPrice: this.minPrice,
          maxPrice: this.maxPrice
        });
      },
      applyBrandFilter() {
        // Emit event to parent component with selectedBrand
        this.$emit('brandSelected', this.selectedBrand);
      },
      applyCategoryFilter() {
        // Emit event to parent component with selectedCategory
        this.$emit('categorySelected', this.selectedCategory);
      }
    }
  };
  </script>

  <style>
    .filter {
        padding: 10px;
        
    }
  </style>